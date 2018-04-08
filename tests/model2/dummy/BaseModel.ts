import {AxiosInstance} from "axios";
import * as moxios from 'moxios';
import {Model} from "../../../lib";

export abstract class BaseModel extends Model {
    constructor() {
        super();
        moxios.install((<AxiosInstance> this.getHttpClient().getImplementingClient()));
    }

    getJsonApiBaseUrl(): string {
        return 'http://coloquent.app/api/';
    }
}