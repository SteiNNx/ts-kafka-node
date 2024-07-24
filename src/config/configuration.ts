export default () => ({
  nodeEnv: process.env.NODE_ENV || 'dev',
  kafka: {
    clientId: process.env.KAFKA_CLIENT_ID,
    clientLogId: process.env.KAFKA_LOG_CLIENT_ID,
    brokers: [process.env.KAFKA_BROKERS],
    password: process.env.KAFKA_PASSWORD,
    topic: process.env.KAFKA_TOPIC,
    username: process.env.KAFKA_USERNAME,
  },
});
