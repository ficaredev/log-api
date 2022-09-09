export default (fn) => (ctx) => fn(ctx).catch(ctx.next);
