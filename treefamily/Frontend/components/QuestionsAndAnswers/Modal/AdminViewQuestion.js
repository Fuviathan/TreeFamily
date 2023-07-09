import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../UI/Input";
import useSWR from "swr"

export default function AdminViewQuestion({ isVisible, onClose, item }) {
    const findUserById = (Id) => {
        if (Id === null || Id === "" || Id === 0) return null
        else {
            const { data, error } = useSWR(`http://localhost:8080/member/get-by-id-member?id=${Id}`)
            return data?.fullName
        }
    }
    const method = useForm({
        defaultValues: {
            id: item.id,
            title: item.title,
            reason: item.reason,
            member_id: item.memberId,
            content: item.content,
            sendDate: item.sendDate,
        },
    });
    async function onSubmit(formData) {
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
                    <FormProvider {...method}>
                        <form
                            className="z-20 flex flex-col items-center w-4/12 max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
                            onSubmit={method.handleSubmit(onSubmit)}
                        >
                            <div className="w-full px-10 space-y-12 overflow-y-auto">
                                <div className="pb-12 border-gray-900/10">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-base font-semibold leading-7 text-gray-900"
                                    >
                                        Sửa câu hỏi
                                    </Dialog.Title>

                                    <div className="mt-1 text-sm leading-6 text-gray-600">
                                        Nhập thông tin của câu hỏi
                                    </div>

                                    <div className="grid grid-cols-1 pb-24 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <Input
                                            {...{
                                                className: "sm:col-span-4",
                                                title: "Tiêu đề",
                                                type: "text",
                                                name: "title",
                                                disabled: "disabled"
                                            }}
                                        ></Input>
                                        <Input
                                            {...{
                                                data: findUserById(item.memberId),
                                                className: "sm:col-span-2",
                                                title: "Người gửi",
                                                name: "memberId",
                                                disabled: "disabled"
                                            }}
                                        ></Input>
                                        <Input
                                            {...{
                                                className: "sm:col-span-4",
                                                title: "Lý do",
                                                type: "text",
                                                name: "reason",
                                                disabled: "disabled"
                                            }}
                                        ></Input>
                                        <Input
                                            {...{
                                                className: "sm:col-span-2",
                                                title: "Ngày gửi",
                                                type: "text",
                                                name: "sendDate",
                                                disabled: "disabled"
                                            }}
                                        ></Input>
                                        <div className='sm:col-span-6'>
                                            <label
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Nội dung câu hỏi
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    disabled
                                                    {...method.register("content")}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border-t"></div>
                            <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                                <button
                                    type="button"
                                    onClick={() => onClose()}
                                    className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Đóng
                                </button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </Dialog>
    );
}
