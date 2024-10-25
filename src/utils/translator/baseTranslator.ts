export abstract class BaseTranslator<T, U> {
    abstract toSpanish(entity: T): U;
    abstract toEnglish(entity: U): T;

    toSpanishList(entities: T[]): U[] {
        return entities.map(entity => this.toSpanish(entity));
    }

    toEnglishList(entities: U[]): T[] {
        return entities.map(entity => this.toEnglish(entity));
    }
}
