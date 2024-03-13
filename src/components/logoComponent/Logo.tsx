import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const imageStyles = cva(['w-full', 'rounded'], {
  variants: {
    size: {
      default: [],
      large: ['h-64'],
      medium: ['h-10'],
      small: ['h-2'],
    },
    shape: {
      default: [],
      rounded: ['rounded-lg'],
      circle: ['rounded-full'],
    },
  },
});

const Logo = () => {
  return (
    <img
      className={twMerge(imageStyles({ size: 'medium', shape: 'rounded' }))}
      src="/assets/images.png"
      alt="logo"
      width="100px"
    />
  );
};
export default Logo;
