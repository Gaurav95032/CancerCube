export default {
    dialect: "postgresql",
    schema: "./src/utils/schema.jsx",
    out: "./drizzle",
    dbCredentials: {
      url: "postgresql://neondb_owner:NZ2EMSzJx4Yi@ep-green-fog-a543vdwa.us-east-2.aws.neon.tech/CancerCube?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:NZ2EMSzJx4Yi@ep-green-fog-a543vdwa.us-east-2.aws.neon.tech/CancerCube?sslmode=require",
    },
  };