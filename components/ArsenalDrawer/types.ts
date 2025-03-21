import { ReactElement } from "react";

export type ArsenalDataType = {
  [category: string]: ArsenalDataItem[];
};

export type ArsenalDataItem = {
  name: string;
  icon: ReactElement;
};
