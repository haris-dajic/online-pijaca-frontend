export interface MapboxOutput {
    attribution: string;
    features: object[];//Feature[];
    query: [];
  }

  export interface Feature {
    place_name: string;
  }