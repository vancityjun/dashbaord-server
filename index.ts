import {PrismaClient} from '@prisma/client';
import express from 'express';
// https://prisma.typegraphql.com/docs/basics/installation
const app = express();
const port = 3000;
const prisma = new PrismaClient();
