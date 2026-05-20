import { registerAs } from '@nestjs/config';
import { PostgresDataSourceOptions } from 'typeorm/driver/postgres/PostgresDataSourceOptions';

export default registerAs('database', (): PostgresDataSourceOptions => ({
  type: 'postgres',
  
  // Directly passes the whole Neon connection string
  url: process.env.DATABASE_URL,

  // Neon requires SSL. This block prevents "no pg_hba.conf entry" errors
  ssl: process.env.NODE_ENV === 'production' 
    ? { rejectUnauthorized: true } // Strict validation for production
    : { rejectUnauthorized: false }, // Allows fast connection locally without local certs

  // Standard entity & migration mapping
  entities: [],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  
  // Safe execution defaults
  synchronize: process.env.NODE_ENV === 'development', 
  logging: process.env.NODE_ENV === 'development',
}));