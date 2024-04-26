import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subtitle?: string;
  buttons: PromptButton[];
  propmtType: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subtitle,
  buttons,
  propmtType,
  placeholder,
  defaultValue,
}: Options) => {
  prompt(title, subtitle, buttons, {
    type: propmtType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
