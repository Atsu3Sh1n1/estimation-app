// 📜 index.ts

export * from './pipes';
export * from './materials';
export * from './categories';
export * from './fittingCompatibility';
export * from './bolt'; 



// 個別に明確に import して alias をつけるのが安全です
import { pipeJisMap } from './pipes';


// pipeSizes という名前で使用（用途が pipe 限定ならこれでOK）
export const pipeSizes = pipeJisMap;

// すべてまとめたい場合は以下のように統合用オブジェクトにする
export const combinedJisMap = {
  ...pipeJisMap,
};
