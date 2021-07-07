export interface Config {
  hasEffect: () => boolean;
  isValid: () => boolean;
  getErrors: () => { [key: string]: string | null };
}
