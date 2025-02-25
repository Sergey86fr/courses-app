import { IReviewFormProps } from "./review-form.props";
import styles from "./review-form.module.css";
import cn from "classnames";
import { Input } from "../input/input";
import { RatingStar } from "../ratingStar/ratingStar";
import { TextArea } from "../textarea/textarea";
import { Button } from "../button/button";
import { BUTTON_VARIANT } from "../button/button.enum";
import { IReviewForm } from "./review-form.interface";
import { useForm, Controller } from "react-hook-form";

export function ReviewForm({
  productId,
  className,
  ...props
}: IReviewFormProps) {
  const { register, control, handleSubmit, formState:{errors} } = useForm<IReviewForm>();

  const onSubmit = handleSubmit((data) => data);
  return (
    <form onSubmit={onSubmit}>
      <div {...props} className={cn(styles.reviewForm, className || "")}>
        <Input
          {...register("name",{
            required: {
              value: true,
              message: "Заполните имя"
            }
          })}
          placeholder="Имя"
          error={errors.name}
          className={cn(styles.name)}
        />
        <Input
          {...register("title")}
          placeholder="Заголовок отзыва"
          className={cn(styles.title)}
        />
        <div className={cn(styles.rating)}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <RatingStar
                rating={field.value}
                isEditable
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <TextArea
          {...register("desc")}
          placeholder="Текст отзыва"
          className={cn(styles.desc)}
        />
        <div className={cn(styles.submit)}>
          <Button variant={BUTTON_VARIANT.PRIMARY}>Отправить</Button>
          <span className={cn(styles.info)}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
    </form>
  );
}
