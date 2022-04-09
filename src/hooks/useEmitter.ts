import { useSingleton } from "./useSingleton";

export interface IEvent {
  name: string;
  cb: (...args: any[]) => any;
}

export class Events {
  events: IEvent[] = [];

  emit(name: string, data: any) {
    console.log(name, data);
    this.events.filter((e) => name === e.name).forEach((e) => e.cb(data));
  }

  on(name: string, cb: IEvent["cb"]) {
    this.events.push({ name, cb });
  }
  remove(name: string, cb: IEvent["cb"]) {
    const survivors = (e: IEvent) => !(name === e.name && cb === e.cb);
    this.events = this.events.filter(survivors);
  }
}

export const useEmitter = useSingleton(() => {
  const emitter = new Events();
  return emitter;
});
