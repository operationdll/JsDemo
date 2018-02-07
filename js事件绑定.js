/**
 * @description �¼��󶨣����ݸ������
 * @param target �¼��������� 
 * @param type   �¼�
 * @param func   �¼�������
 */
function addEvents(target, type, func) {
    if (target.addEventListener)    //��ie ��ie9
        target.addEventListener(type, func, false);
    else if (target.attachEvent)   //ie6��ie8
        target.attachEvent("on" + type, func);
    else target["on" + type] = func;   //ie5
};
/**
 * @description �¼��Ƴ������ݸ������
 * @param target �¼���������
 * @param type   �¼�
 * @param func   �¼�������
 */
function removeEvents(target, type, func){
    if (target.removeEventListener)
        target.removeEventListener(type, func, false);
    else if (target.detachEvent)
        target.detachEvent("on" + type, func);
    else target["on" + type] = null;
};