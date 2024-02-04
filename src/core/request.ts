import { obj } from "../../types";
export default function handle(request: any) {
  return {
    input: function (requestKey: string) {
      return (
        request.params[requestKey] ||
        request.query[requestKey] ||
        request.body?.[requestKey]
      );
    },
    only: function (keys: string[]) {
      const value: obj = {};
      for (const key of keys) {
        value[key] = this.input(key);
      }
      return value;
    },
  };
}
