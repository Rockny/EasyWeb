import { Params, Result } from '~/typings/data'

export default async ({ store, router, ctx }: Params) => {
  const data = __isBrowser__ ? await (await window.fetch(`/api/detail/${router.params.id}`)).json() : await ctx?.apiDeatilservice?.index(ctx.params.id)
  await store.dispatch('detailStore/initialData', { payload: data })
//   const result: Result = {
//     head: { title: "Easy-Web-详情-"+data, meta: [{ name: `keywords`, content: "easy,easy web,最好用的系统"}, { name: `description`, content: "让 .NET 开发更简单，更通用，更流行" }] },
//     data:null
// };
// return result;
}
