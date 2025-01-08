export const checkAudioQuality = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioOutputDevices = devices.filter((device) => device.kind === "audiooutput");

    if (audioOutputDevices.length > 0) {
      // Avaliação fictícia da qualidade
      const qualityPercentage = Math.floor(Math.random() * 31) + 70; // Gera um valor entre 70 e 100%
      return {
        message: "Qualidade de áudio: Boa",
        percentage: qualityPercentage,
      };
    } else {
      return {
        message: "Qualidade de áudio: Ruim",
        percentage: Math.floor(Math.random() * 51), // Gera um valor entre 0 e 50%
      };
    }
  } catch (error) {
    return {
      message: `Erro ao verificar qualidade de áudio. ${error}`,
      percentage: 0, // 0% de qualidade em caso de erro
    };
  }
};
