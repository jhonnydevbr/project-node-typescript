import bodyParser from 'body-parser';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';


export class SetupServer extends Server {

    constructor(private port = 3000){
        super();
    }

    public init(): void{
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json())
    }

    private setupControllers(): void {
        const ForecastController = new ForecastController();
        this.addControllers([ForecastController]);
    }

    public getApp(): Application {
        return this.app;
    }
}