import { Field } from "@components/field";

export const createFormFields = (fieldProps: Record<string, any>, values?: any) => {
    return Object.keys(fieldProps).map(
        (item: string) =>
            new Field({
                hasLabel: true,
                name: item,
                placeholder: fieldProps[item].placeholder,
                inputProps: {
                    ...(fieldProps[item].inputProps ?? { type: "text" }),
                    ...(values ? { value: values[item] } : {}),
                },
            }),
    );
};
