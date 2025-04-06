import { CountryData } from './types';

export const countryData: Record<string, CountryData> = {
  IN: {
    airQuality: {
      value: 42,
      trend: 12,
    },
    temperature: {
      value: 27,
      trend: 'Normal range',
    },
    noiseLevel: {
      value: 62,
      trend: 'Moderate • Peak hours',
    },
    energyUsage: {
      value: 892,
      trend: -15,
    },
    recommendations: [
      'Plant Neem trees in urban areas',
      'Implement smart waste collection in Mumbai',
      'Update flood prevention in Kerala',
    ],
    disasterStatus: [
      { text: 'No active monsoon warnings', severity: 'success' },
      { text: 'Moderate heat wave risk (72h forecast)', severity: 'warning' },
      { text: 'Air quality within safe limits', severity: 'success' },
    ],
  },
  SG: {
    airQuality: {
      value: 55,
      trend: -5,
    },
    temperature: {
      value: 31,
      trend: 'Above average',
    },
    noiseLevel: {
      value: 58,
      trend: 'Low • Holiday',
    },
    energyUsage: {
      value: 756,
      trend: -8,
    },
    recommendations: [
      'Expand green corridors in the North district',
      'Implement smart waste collection in CBD area',
      'Update flood prevention systems in low-lying areas',
    ],
    disasterStatus: [
      { text: 'No active weather warnings', severity: 'success' },
      { text: 'Moderate flood risk (48h forecast)', severity: 'warning' },
      { text: 'Air quality within safe limits', severity: 'success' },
    ],
  },
};