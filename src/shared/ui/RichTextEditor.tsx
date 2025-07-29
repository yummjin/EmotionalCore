'use client';

import React from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from '@tiptap/extension-font-size';
import NextImage from 'next/image';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('이미지 URL을 입력하세요:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = window.prompt('링크 URL을 입력하세요:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const OptionButton = ({
    icon,
    onClick,
    isActive,
  }: {
    icon: string;
    onClick: () => void;
    isActive: boolean;
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer rounded p-1 hover:bg-gray-100 ${
          isActive ? 'bg-gray-200' : ''
        }`}
      >
        <NextImage src={icon} alt={icon} width={16} height={16} />
      </button>
    );
  };

  return (
    <div className="flex items-center gap-4 border-b border-gray-200 pb-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
      >
        ↶
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
      >
        ↷
      </button>

      <select
        onChange={e =>
          editor.chain().focus().setFontFamily(e.target.value).run()
        }
        className="rounded border border-gray-300 px-2 py-1 text-sm"
      >
        <option value="나눔고딕">나눔고딕</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>

      <select
        onChange={e => editor.chain().focus().setFontSize(e.target.value).run()}
        className="rounded border border-gray-300 px-2 py-1 text-sm"
      >
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
      </select>

      <div className="flex gap-2">
        <OptionButton
          icon="/icons/icon-leftalign.svg"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
        />
        <OptionButton
          icon="/icons/icon-aligncenter.svg"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
        />
        <OptionButton
          icon="/icons/icon-alignright.svg"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
        />
        <OptionButton
          icon="/icons/icon-aligneven.svg"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          isActive={editor.isActive({ textAlign: 'justify' })}
        />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`rounded p-1 font-bold hover:bg-gray-100 disabled:opacity-50 ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`rounded p-1 italic hover:bg-gray-100 disabled:opacity-50 ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`rounded p-1 underline hover:bg-gray-100 ${
            editor.isActive('underline') ? 'bg-gray-200' : ''
          }`}
        >
          U
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`rounded p-1 line-through hover:bg-gray-100 disabled:opacity-50 ${
            editor.isActive('strike') ? 'bg-gray-200' : ''
          }`}
        >
          S
        </button>

        <button
          type="button"
          onClick={setLink}
          className={`rounded p-1 hover:bg-gray-100 ${
            editor.isActive('link') ? 'bg-gray-200' : ''
          }`}
        >
          🔗
        </button>
        <button
          type="button"
          onClick={addImage}
          className="rounded p-1 hover:bg-gray-100"
        >
          🖼️
        </button>
      </div>
    </div>
  );
};

export function RichTextEditor({
  content,
  onChange,
  placeholder,
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || '작품 내용을 작성하세요...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Underline,
      TextStyle,
      Color,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      FontSize.configure({
        types: ['textStyle'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={className}>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none"
      />
    </div>
  );
}
