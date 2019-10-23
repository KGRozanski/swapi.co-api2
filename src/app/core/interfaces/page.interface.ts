import Planet from './planet.interface';

export default interface Page {
    count: number;
    next: any;
    previous: any;
    results: Array<Planet[]>;
}