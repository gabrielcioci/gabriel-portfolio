export type LanguageProps = {
  name: string;
  level?: string;
};

export type LanguageGroupProps = {
  [key: string]: LanguageProps[];
};
