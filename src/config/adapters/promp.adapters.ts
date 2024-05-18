import prompt from "react-native-prompt-android";

interface Options {
    title: string;
    subtitle?: string;
    buttons: PromptButton[];
    prompType?: 'plain-text' | 'secure-text';
    placeholder?: string;
    defaultValue?: string;
}

interface PromptButton{
    text: string;
    onPress: (value: string | any ) => void | string;
    style?: "cancel" | "default" | "destructive" | undefined;
}

export const showPrompt = ({
    title,
    subtitle,
    buttons,
    prompType = 'plain-text', //por defecto
    placeholder,
    defaultValue
}: Options) => {

    prompt(
        title,
        subtitle,
        buttons,
        {
            type: prompType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}