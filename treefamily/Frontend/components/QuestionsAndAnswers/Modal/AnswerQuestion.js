import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../UI/Input";
import { useSession } from "next-auth/react";

export default function AnswerQuestion({ isVisible, onClose, item }) {
    const { data, error } = useSession()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            questionId: item.id,
            respondersId: item.memberId,
        },
    });
    async function onSubmit(formData) {
        const JSONdata = JSON.stringify(formData);
        const endpoint = "http://localhost:8080/answer/create";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            alert("Thêm câu trả lời thành công");
            onClose();
        } else {
            const result = await response.json();
            alert(result.message);
        }
    }

    if (!isVisible) return <></>;
    return (
        <Dialog
            as="div"
            className="fixed inset-0 z-20"
            open={isVisible}
            onClose={onClose}
        >
            <div className="fixed inset-0 flex px-4 pt-4 pb-20 text-center bg-gray-500 bg-opacity-75 sm:block sm:p-0 ">
                <div className="z-20 flex items-center justify-center h-full ">
                    <form
                        className="z-20 flex flex-col items-center w-4/12 max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="w-full px-10 space-y-12 overflow-y-auto">
                            <div className="pb-12 border-gray-900/10">
                                <Dialog.Title
                                    as="h2"
                                    className="text-base font-semibold leading-7 text-gray-900"
                                >
                                    Trả lời câu hỏi
                                </Dialog.Title>

                                <div className="mt-1 text-sm leading-6 text-gray-600">
                                    Nhập câu trả lời
                                </div>

                                <div className="grid grid-cols-1 pb-24 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className='sm:col-span-6'>
                                        <label
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Câu trả lời
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                {...register("content", {
                                                    required: "Mời nhập câu trả lời"
                                                })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                                            />
                                        </div>
                                        {errors.content && (
                                            <span className="block mt-2 text-left text-red-500 opacity-80">
                                                {errors.content.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t"></div>
                        <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                            <button
                                type="button"
                                onClick={() => onClose()}
                                className="px-3 py-2 text-sm font-semibold text-red-500 bg-white border border-red-500 rounded-md shadow-sm hover:bg-red-500 hover:text-white "
                            >
                                Hủy bỏ
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Lưu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
}