import Page from '../interfaces/page.interface';

export default class PageFactory {
    create(event: Page) {
        return {count: event.count, next: event.next, previous: event.previous, results: event.results}
    }
}