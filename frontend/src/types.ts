export interface Country {
  name: string;
  code: string;
  capital: string;
  region: string;
  latlng: [number, number];
}

export interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  trend: string;
  color: string;
}

export interface CountryData {
  airQuality: {
    value: number;
    trend: number;
  };
  temperature: {
    value: number;
    trend: string;
  };
  noiseLevel: {
    value: number;
    trend: string;
  };
  energyUsage: {
    value: number;
    trend: number;
  };
  recommendations: string[];
  disasterStatus: Array<{
    text: string;
    severity: 'success' | 'warning' | 'error';
  }>;
}