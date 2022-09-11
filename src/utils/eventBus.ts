export default class EventBus {
    private readonly events: Record<string, Function[]> = {};

    on(event: string, callback: Function) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        return this.events[event].push(callback);
    }

    off(event: string, callback: Function) {
        if (!this.events[event]) {
            this.events[event] = [];
            console.warn(`Нет события ${event}`);
        }

        return (this.events[event] = this.events[event].filter((func) => func !== callback));
    }

    emit(event: string, ...args: unknown[]) {
        if (!this.events[event]) {
            this.events[event] = [];
            console.warn(`Нет события ${event}`);
        }

        return this.events[event].map((func: Function) => func(...args));
    }
}
