import { Params, Result } from '~/typings/data'

export default async ({ store, router, ctx }: Params) => {
    const result: Result = {
        head: { title: "Easy-Web", meta: [{ name: `keywords`, content: "easy,easy web,最好用的系统"}, { name: `description`, content: "让 .NET 开发更简单，更通用，更流行" }] },
        data:null
    };
    return result;
}
