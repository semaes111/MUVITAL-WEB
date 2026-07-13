import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, forwardRef } from "react";

interface BaseProps {
  label: string;
  error?: string;
  required?: boolean;
}

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { type?: "input" | "tel" | "email" };

type SelectFieldProps = BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    type: "select";
    options: { value: string; label: string }[];
  };

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { type: "textarea" };

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

const FormField = forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    const labelClasses = "block font-general text-xs uppercase tracking-[0.2em] text-mineral/70 mb-2";
    const fieldClasses = cn(
      "w-full bg-grafito-700 border border-mineral/10 rounded-md px-4 py-3 text-mineral font-body text-sm placeholder:text-mineral/30 focus:outline-none focus:border-clinico/50 focus:ring-1 focus:ring-clinico/30 transition-colors duration-200",
      error && "border-red-400/50 focus:border-red-400",
      className
    );

    return (
      <div className="mb-4">
        <label className={labelClasses}>
          {label}
          {required && <span className="text-vital ml-1">*</span>}
        </label>
        {props.type === "select" ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={fieldClasses}
            {...(props as SelectFieldProps)}
          >
            {(props as SelectFieldProps).options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : props.type === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={cn(fieldClasses, "min-h-[100px] resize-y")}
            {...(props as TextareaFieldProps)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={fieldClasses}
            {...(props as InputFieldProps)}
          />
        )}
        {error && <p className="mt-1 text-xs text-clinico-dark">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
