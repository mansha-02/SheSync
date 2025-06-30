import z from 'zod';

export const periodTrackingSchema = z.object({
  user: z.string(),
  date: z.date(),
  cycleDuration: z.number(),
  lastPeriodStart: z.date(),
  lastPeriodDuration: z.number(),
  moodTypes: z.array(z.string()),
  moodSeverity: z.string(),
  moodDate: z.date(),
  symptoms: z.array(z.string()),
  symptomSeverities: z.map(z.string(), z.string()),
  symptomDate: z.date(),
  sleepDuration: z.number(),
  sleepQuality: z.string(),
  nextPeriodPrediction: z.date(),
  waterIntakeCount: z.number(),
  lastWaterLogDate: z.string(),
});
