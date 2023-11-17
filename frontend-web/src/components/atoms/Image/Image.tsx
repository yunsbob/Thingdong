import * as S from "@/components/atoms/Image/Image.styles";

const Image = ({
  width,
  height,
  $margin,
  $unit = "rem",
  ...attributes
}: S.ImageProps) => {
  return (
    <S.ImageConatiner
      width={width}
      height={height}
      $margin={$margin}
      $unit={$unit}
      {...attributes}
    />
  );
};

export { Image };
