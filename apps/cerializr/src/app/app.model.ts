import {autoserializeAs} from 'cerializr';

export class AppModel {
    @autoserializeAs(String)
    name: string;
}