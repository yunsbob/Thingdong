const extractHSL = (hsl: string) => {
  const hueString = hsl.match(/hsl\((\d{1,3})/);
  const hue = hueString ? parseInt(hueString[1]) : 0
  const mappedHue = Math.round((hue / 360) * 99);

  const saturationString = hsl.match(/hsl\(\d{1,3}, (\d{1,3})%/);
  const saturation = saturationString ? parseInt(saturationString[1]) : 0
  
  const levelString = hsl.match(/hsl\(\d{1,3}, \d{1,3}%, (\d{1,3})%/);
  const level = levelString ? parseInt(levelString[1]) : 0;

  return { mappedHue, saturation, level }
};

export { extractHSL };
