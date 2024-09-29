export type StateResponse = {
  total: number;
  states: StateProps[];
  next: string | null;
};

export type StateProps = {
  name: string;
  code: string;
  date: string;
};
