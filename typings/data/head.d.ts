/** 
html 头部信息
*/
export interface Head {
    /** 标题 */
    title: string | any
    /** 元信息 */
    meta: Meta[]
}

/** 
html head 元信息
*/
export interface Meta {
    /** 名称 */
    name?: string | any
    /** http头 */
    httpEquiv?: string | any
    /** 内容 */
    content: string | any
}