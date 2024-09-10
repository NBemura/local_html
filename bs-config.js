module.exports = {
  server: {
    baseDir: 'dest', // 出力されるHTMLが保存されるディレクトリ
  },
  files: ['dest/**/*.html', 'dest/css/**/*.css'], // 監視対象ファイル
  injectChanges: true, // CSSファイルが変更されたときに自動的に更新
  reloadDebounce: 500, // リロードを遅延させる
  codeSync: true, // 同期処理を有効にする
  cache: false, // キャッシュ無効化
  notify: false, // 通知ポップアップを無効化
};
