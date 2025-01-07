import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { brands, models, capacities } from '../../Data/deviceData';
import { Button, Container, Input, Option, Select, Title } from './styles';

type Brand = keyof typeof models; // Marca é uma chave de 'models'
type CapacityModels = keyof typeof capacities; // Tipando as chaves de capacities

const IMEIInput = () => {
  const [imei, setImei] = useState('');
  const [brand, setBrand] = useState<Brand | "">(''); // Definido como uma chave de models
  const [model, setModel] = useState<CapacityModels | "">(''); // Garantir que model seja uma chave válida de capacities
  const [capacity, setCapacity] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { accessKey } = location.state;

  const handleValidation = () => {
    if (imei.length === 15 && /^\d+$/.test(imei) && brand && model && capacity) {
      navigate('/scratch', { state: { imei, brand, model, capacity, accessKey } });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <Container>
      <Title>Insira os detalhes do dispositivo</Title>
      <Input
        type="text"
        value={imei}
        onChange={(e) => {
          if (/^\d*$/.test(e.target.value)) {
            setImei(e.target.value);
          }
        }}
        placeholder="Digite o IMEI"
        maxLength={15}
      />
      <br />

      <Select
        value={brand}
        onChange={(e) => {
          const selectedBrand = e.target.value as Brand; // Garantir que a marca é uma chave válida
          setBrand(selectedBrand);
          setModel('');
          setCapacity('');
        }}
      >
        <Option value="">Selecione a Marca</Option>
        {brands.map((brand: string) => (
          <Option key={brand} value={brand}>
            {brand}
          </Option>
        ))}
      </Select>
      <br />

      {brand && (
        <Select
          value={model}
          onChange={(e) => {
            const selectedModel = e.target.value as CapacityModels; // Garantir que o valor seja uma chave válida
            setModel(selectedModel);
            setCapacity(''); // Resetando a capacidade
          }}
        >
          <Option value="">Selecione o Modelo</Option>
          {models[brand]?.map((model: string) => (
            <Option key={model} value={model}>
              {model}
            </Option>
          ))}
        </Select>
      )}
      <br />

      {model && (
        <Select
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        >
          <Option value="">Selecione a Capacidade</Option>
          {capacities[model]?.map((capacity: string) => (
            <Option key={capacity} value={capacity}>
              {capacity}
            </Option>
          ))}
        </Select>
      )}
      <br />

      <Button onClick={handleValidation}>
        Validar
      </Button>
    </Container>
  );
};

export default IMEIInput;
