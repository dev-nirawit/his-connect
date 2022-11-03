/// <reference path="../../../typings.d.ts" />
import * as fastify from 'fastify';
import * as HttpStatus from 'http-status-codes';

import { IswinModel } from '../../models/isonline/iswin';
const isModel = new IswinModel();

const router = (fastify, { }, next) => {
    fastify.get('/', async (req: fastify.Request, res: fastify.Reply) => {
        res.send({
            apiCode: 'ISOnline',
            version: fastify.appVersion.version,
            subversion: fastify.appVersion.subVersion
        });
    });

    fastify.get('/alive', async (req: fastify.Request, res: fastify.Reply) => {
        try {
            const result = await isModel.getVersion(fastify.dbISOnline);
            res.send({
                statusCode: HttpStatus.OK,
                version: fastify.appVersion.version,
                subversion: fastify.appVersion.subVersion,
                startServerTime: fastify.startServerTime,
                idDb: process.env.IS_DB_NAME,
                connnection: true
            });
        } catch (error) {
            res.send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                version: fastify.appVersion.version,
                subversion: fastify.appVersion.subVersion,
                startServerTime: fastify.startServerTime,
                connnection: false,
                message: error.message
            });
        }

    });

    fastify.get('/lib_his_wards', {}, async (req: fastify.Request, res: fastify.Reply) => {
        try {
            res.send({
                statusCode: HttpStatus.OK,
                version: fastify.appVersion.version,
                subversion: fastify.appVersion.subVersion,
                ok: true, rows: 'test'
            });
        } catch (error) {
            res.send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                ok: false, error: error, message: error.message
            });
        }
    });

    fastify.get('/lib_his_ward/:id', {}, async (req: fastify.Request, res: fastify.Reply) => {
        let id = req.params.id;
        // console.log(id);
        try {
            res.send({
                statusCode: HttpStatus.OK,
                version: fastify.appVersion.version,
                subversion: fastify.appVersion.subVersion,
                ok: true, rows: id
            });
        } catch (error) {
            res.send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                ok: false, error: error, message: error.message
            });
        }
    });

    next();
}


module.exports = router;
