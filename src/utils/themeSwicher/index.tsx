export const changeTheme = (theme: string): void => {
  document.querySelector('html')?.setAttribute('data-theme', theme);
};
