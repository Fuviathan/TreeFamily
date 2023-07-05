import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import Input from "../../../UI/Input";
import useSWR from "swr";

export default function ViewPermission({ isVisible, onClose, item }) {
    const method = useForm({
        defaultValues: {
            permissionGroupName: item.permissionGroupName,
            permissionsDescription: item.permissionsDescription,
            viewMebers: item.viewMebers,
            createMembers: item.createMembers,
            updateMembers: item.updateMembers,
            viewFinancial: item.viewFinancial,
            createFinancial: item.createFinancial,
            updateFinancial: item.updateFinancial,
            deleteFinancial: item.deleteFinancial, 
            viewEvent: item.viewEvent,
            createEvent: item.createEvent, 
            updateEvent: item.updateEvent, 
            deleteEvent: item.deleteEvent,
        },
    });
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
                            className="z-20 flex flex-col items-center max-w-3xl py-4 m-auto bg-white border-2 border-solid border-slate-300"
                        >
                            <div className="w-full px-10 space-y-12 overflow-y-auto">
                                <div className="pb-12 border-gray-900/10">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-base font-semibold leading-7 text-gray-900"
                                    >
                                        Xem nhóm quyền
                                    </Dialog.Title>

                                    <div className="mt-1 text-sm leading-6 text-gray-600">
                                        Xem thông tin của nhóm quyền 
                                    </div>

                                    <div className="grid grid-cols-1 pb-24 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <Input
                                            {...{
                                                className: "sm:col-span-6",
                                                title: "Tên quyền",
                                                type: "text",
                                                name: "permissionGroupName",
                                                disabled: 'disabled'
                                            }}
                                        ></Input>
                                        <div className='sm:col-span-6'>
                                            <label
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Mô tả nhóm quyền
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    disabled
                                                    {...method.register("permissionsDescription")}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                                                />
                                            </div>
                                        </div>
                                        <div className="block text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Các chức năng của quyền:</div>
                                        <div className="sm:col-span-4"></div>
                                        {/* Nhóm quyền quản lý gia phả */}
                                        <div className="block text-base font-medium leading-6 text-gray-900 sm:col-span-2">Quản lý gia phả:</div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Xem</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2"  {...method.register("viewMebers")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Tạo mới</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("createMembers")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1 ml-8">
                                            <div className="text-base font-medium leading-6 text-gray-900">Sửa</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("updateMembers")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="sm:col-span-1"></div>
                                        {/* Nhóm quyền quản lý sự kiện */}
                                        <div className="block text-base font-medium leading-6 text-gray-900 sm:col-span-2">Quản lý sự kiện:</div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Xem</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("viewEvent")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Tạo mới</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("createEvent")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1 ml-8">
                                            <div className="text-base font-medium leading-6 text-gray-900">Sửa</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("updateEvent")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1 ml-8">
                                            <div className="text-base font-medium leading-6 text-gray-900">Xóa</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("deleteEvent")} disabled type='checkbox'></input>
                                        </div>
                                        {/* Nhóm quyền quản lý tài chính */}
                                        <div className="block text-base font-medium leading-6 text-gray-900 sm:col-span-2">Quản lý tài chính:</div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Xem</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("viewFinancial")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1">
                                            <div className="text-base font-medium leading-6 text-gray-900">Tạo mới</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("createFinancial")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1 ml-8">
                                            <div className="text-base font-medium leading-6 text-gray-900">Sửa</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("updateFinancial")} disabled type='checkbox'></input>
                                        </div>
                                        <div className="flex col-span-1 ml-8">
                                            <div className="text-base font-medium leading-6 text-gray-900">Xóa</div>
                                            <input className="w-4 h-4 mt-1.5 ml-2" {...method.register("deleteFinancial")} disabled type='checkbox'></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border-t"></div>
                            <div className="flex items-center self-end justify-end mt-6 mr-10 gap-x-6">
                                <button
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
