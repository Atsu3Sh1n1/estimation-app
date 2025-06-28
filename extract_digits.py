from pdf2image import convert_from_path
import pytesseract
from PIL import Image
import os

# --- 設定部分 ---
# Tesseract実行ファイルのパス（自分の環境に合わせて必ず書き換えること）
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Popplerのbinフォルダパス（Windowsの場合。popplerをダウンロードし展開した場所）
POPPLER_PATH = r"C:\tools\poppler\poppler-24.08.0\Library\bin"

# OCR対象PDFファイル名（同じフォルダにある前提）
PDF_FILE = "angle-danmen.pdf"

# 一時保存用画像フォルダ（同じフォルダ内）
TEMP_IMAGE_FOLDER = "temp_images"

# OCRの文字制限（英数字＋小数点・記号）
CUSTOM_CONFIG = r'--oem 3 --psm 3 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.*-+'

# DPI設定（300以上推奨）
DPI = 500


def main():
    # 画像保存用フォルダ作成
    if not os.path.exists(TEMP_IMAGE_FOLDER):
        os.makedirs(TEMP_IMAGE_FOLDER)

    # PDFを画像に変換（全ページ）
    print(f"PDFを画像に変換中... ({PDF_FILE})")
    images = convert_from_path(PDF_FILE, dpi=DPI, poppler_path=POPPLER_PATH)

    # 各ページ画像を保存してOCR実行
    for i, img in enumerate(images):
        image_path = os.path.join(TEMP_IMAGE_FOLDER, f"page_{i + 1}.png")
        img.save(image_path, "PNG")
        print(f"\n=== ページ {i + 1} のOCR結果 ===")

        # 画像をPILで開きなおしてOCR
        image = Image.open(image_path)

        # OCR実行
        text = pytesseract.image_to_string(image, config=CUSTOM_CONFIG)

        # 出力
        print(text.strip())

    print("\nOCR処理が完了しました。")

if __name__ == "__main__":
    main()
