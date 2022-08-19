import { Head } from './head'
/** 
返回结果
*/
export interface Result {
    /** html head 元信息 */
    head?: Head,
    /** 结果数据 */
    data?:any
}