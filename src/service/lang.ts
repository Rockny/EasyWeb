import { Provide } from '@midwayjs/decorator'

@Provide('LangService')
export class LangService {
  async  SetLang(lang:string): Promise<string> {
    return await Promise.resolve(lang);
  }
}
