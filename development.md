```
cd ../../../../;dc exec drupal bash
```

vim入れた

自動キャッシュクリア
https://qiita.com/yukisyo/items/3027e8995a9f44c3420a
↓
上のだけだとたりなくて
https://www.studio-umi.jp/blog/6/345
settings.local.php に
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
を追加

Tailwind導入メモ
https://qiita.com/Masahiro111/items/62a4927be42a8c06bc79

更新するとき
```
npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind_usuyuki.css
```

緊急時キャッシュクリア
http://localhost:2020/core/rebuild.php