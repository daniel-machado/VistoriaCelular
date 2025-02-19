import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Canvas, Button, Timer, TestResult, Subtitle, ButtonResult } from './styles'; 

const ScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [testFinished, setTestFinished] = useState(false);
  const [coverage, setCoverage] = useState(0);
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [timeLeft, setTimeLeft] = useState(60); // Tempo restante
  const timeLimit = 60; // 60 segundos para o teste
  const navigate = useNavigate();
  const location = useLocation();
  const { micQuality, 
    audioUrl, 
    imei, 
    brand, 
    model, 
    capacity, 
    accessKey, 
    audioTestResult,
    audioHeard,
  } = location.state;

  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.current = canvas.getContext('2d');
      resizeCanvas();

      if (ctx.current) {
        ctx.current.lineCap = 'round';
        ctx.current.strokeStyle = 'rgba(0, 70, 192, 0.8)';
        ctx.current.lineWidth = 30;
      }
    }

    enterFullscreen();

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      //exitFullscreen();
    };
  }, [timerId]);

  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timeLeft === 0) {
      finishTest();
    }
  }, [testStarted, timeLeft]);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;
    if(element.requestFullscreen) {
      element.requestFullscreen();
      // @ts-expect-error MOZ
    } else if(element.mozRequestFullScreen) {
      // @ts-expect-error FIRE
      element.mozRequestFullScreen(); // Firefox
      // @ts-expect-error CHome
    } else if(element.webkitRequestFullscreen) {
      // @ts-expect-error SAFARI
      element.webkitRequestFullscreen(); // Chrome and Safari
      // @ts-expect-error OUTRO
    } else if(element.msRequestFullscreen) {
      // @ts-expect-error OUTRO
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // @ts-expect-error MOX
    } else if (document.webkitExitFullscreen) {
      // @ts-expect-error CHOR
      document.webkitExitFullscreen();
      // @ts-expect-error OUTRO
    } else if (document.msExitFullscreen) {
      // @ts-expect-error SAIR
      document.msExitFullscreen();
    }
  };

  const startTest = () => {
    setTestStarted(true);
    setTestFinished(false);
    setCoverage(0);
    setTimeLeft(timeLimit);
    clearCanvas();
    setTimerId(setTimeout(() => finishTest(), timeLimit * 1000));
  };

  const finishTest = () => {
    setTestStarted(false);
    setTestFinished(true);
    clearTimeout(timerId!);
    const finalCoverage = calculateCoverage();
    setCoverage(finalCoverage * 100);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && ctx.current) {
      ctx.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const calculateCoverage = (): number => {
    const canvas = canvasRef.current;
    if (canvas && ctx.current) {
      const imageData = ctx.current.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let paintedCount = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        if (!(r === 255 && g === 255 && b === 255) && a !== 0) {
          paintedCount++;
        }
      }
      return paintedCount / (canvas.width * canvas.height);
    }
    return 0;
  };

  const getCanvasCoordinates = (e: React.MouseEvent | React.TouchEvent): [number, number] => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      let x = 0;
      let y = 0;

      if ('clientX' in e) {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else if ('touches' in e) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      }

      return [x, y];
    }
    return [0, 0];
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    const canvas = canvasRef.current;
    if (canvas && ctx.current) {
      ctx.current.beginPath();
      ctx.current.moveTo(x1, y1);
      ctx.current.lineTo(x2, y2);
      ctx.current.stroke();
      ctx.current.closePath();
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDrawing && testStarted && !testFinished) {
      const [x, y] = getCanvasCoordinates(e);
      drawLine(lastX, lastY, x, y);
      setLastX(x);
      setLastY(y);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!testStarted || testFinished) return;
    const [x, y] = getCanvasCoordinates(e);
    setIsDrawing(true);
    setLastX(x);
    setLastY(y);
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handleNavigateToResults = () => {
    exitFullscreen(); // Sai do modo fullscreen ao clicar no botão.
    navigate('/result', { state: {  
      micQuality,
      audioUrl, 
      imei, 
      brand, 
      model, 
      capacity, 
      accessKey, 
      audioTestResult,
      audioHeard,
      coverage } 
    });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas
        ref={canvasRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      ></Canvas>

      {testStarted && !testFinished && (
        <Timer>
          Tempo restante: {timeLeft}s
          {timeLeft >= 55 && <p>Arraste o dedo na tela para testar</p>}
        </Timer>
      )}

      {!testStarted && !testFinished && (
        <Button onClick={startTest}>Clique para testar a tela</Button>
      )}

      {testFinished && (
        <TestResult>
          <Subtitle>Teste Concluído! Cobertura final: {coverage.toFixed(2)}%</Subtitle>
          <ButtonResult onClick={handleNavigateToResults}>Ir para Resultado</ButtonResult>
        </TestResult>
      )}
    </div>
  );
};

export default ScratchCard;
