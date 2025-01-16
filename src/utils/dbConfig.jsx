import {neon} from '@neondatabase/serverless' 
import {drizzle} from 'drizzle-orm/neon-http'
import * as schema from './schema'

const sql = neon(
    "postgresql://neondb_owner:NZ2EMSzJx4Yi@ep-green-fog-a543vdwa.us-east-2.aws.neon.tech/CancerCube?sslmode=require"
)

export const db = drizzle(sql, {schema})