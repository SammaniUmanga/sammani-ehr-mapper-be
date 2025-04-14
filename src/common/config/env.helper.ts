export function getEnvPath(destination: string): string {
  const env: string = process.env.NODE_ENV || 'DEV';

  const envFiles = {
    LOCAL: '.env.local',
    DEV: '.env.dev',
    STAGING: '.env.staging',
    PROD: '.env.prod',
  };

  const envFile = envFiles[env] || '.env.local';
  return `${destination}/${envFile}`;
}
