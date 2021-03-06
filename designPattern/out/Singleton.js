// 单例模式
// 禁止某些大型类的频繁创建，节省开销
// 保证核心服务独立控制整个流程
// 在js中尽量使用单例来组织命名空间
class Singleton {
    constructor() { }
    ; // 私有化构造函数，避免被直接创建
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
Singleton.instance = null;
// 测试类
class SingletonTest {
    static runSingletonTest() {
        // const inst = new Singleton();  // 不允许在外部实例化
        const instance = Singleton.getInstance();
        console.log(instance);
    }
}
// 执行测试
SingletonTest.runSingletonTest();
//# sourceMappingURL=Singleton.js.map