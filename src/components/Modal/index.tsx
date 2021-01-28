import React from "react";
import cx from "classnames";


import { ReactComponent as Percent } from "../../assets/img/percent.svg";
import { ReactComponent as MinusCircle } from "../../assets/img/minus-circle.svg";
import { ReactComponent as PlusCircle } from "../../assets/img/plus-circle.svg";

type Props = {
  show?: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = (props: Props) => {
  const [conditions, setCondition ] = React.useState([
    {
      rules: [{}]
    }
  ]);

  const addCondition = () => {
    const state = [...conditions];
    state.push({
      rules: [{}]
    });
    setCondition(state);
  };

  const removeCondition = (conditionIndex:number) => {
    if(conditions.length === 1){
      return false;
    }

    const state = [...conditions];
    state.splice(conditionIndex, 1);
    setCondition(state);
  };

  const addRule = (conditionIndex:number) => {
    const state = [...conditions];
    state[conditionIndex].rules.push({});
    setCondition(state);
  };

  const removeRule = (conditionIndex:number, ruleIndex:number) => {
    const state = [...conditions];
    state[conditionIndex].rules.splice(ruleIndex, 1);
    setCondition(state);
  };

  return (
    <>
      {props.show ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          >
            <div className="flex justify-center mx-auto my-6 px-4 relative z-50 w-full md:w-auto">
              <div className="bg-white flex flex-col w-700px max-w-full rounded-sm shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Add Revenue Group
                  </h3>
                </div>

                <div className="px-6 flex-auto">
                  <label className="block mb-4">
                    <span className="text-gray-700 font-bold">Revenue Group Title</span>
                    <input type="text"
                      className="input mt-1 block w-full"
                    />
                  </label>
                  <div className="mb-6">
                    if <select className="select mx-2 w-20">
                      <option>All</option>
                      <option>1</option>
                    </select>
                    of the below conditions are met
                  </div>
                  <div className="mb-6">
                    {conditions.map((condition, index) => {
                      return (
                        <div key={index}
                          className={cx({
                            "items-center": condition.rules.length === 1,
                            "items-start": condition.rules.length !== 1
                          },
                          "bg-gray-200 -mx-6 px-6 py-4 flex flex-wrap justify-between border-b border-t border-gray-400"
                          )
                          }
                        >
                          <select className="select w-full md:w-2/12 mb-2 md:mb-0">
                            <option>aff_sub</option>
                            <option>aff_sub</option>
                            <option>aff_sub</option>
                          </select>
                          <select className="select w-full md:w-2/12 mb-2 md:mb-0">
                            <option>is</option>
                            <option>equal</option>
                          </select>
                          <span className="w-full md:w-6/12 mb-2 md:mb-0">
                            {condition.rules.map((rule, i) => {
                              return (
                                <div key={i}
                                  className={cx({
                                    "mb-2": condition.rules.length > 1 && condition.rules.length - 1 != i
                                  },"relative")}
                                >
                                  <input type="text"
                                    className="input w-full pr-20" placeholder="inset parameter"/>
                                  {(condition.rules.length == 1 || condition.rules.length - 1 == i) && (
                                    <span className="absolute right-0 top-0 mr-2 mt-2 text-blue-300 hover:text-blue-600 cursor-pointer" onClick={() => addRule(index)}>add rule</span>
                                  ) }

                                  {condition.rules.length > 1 && condition.rules.length - 1 != i && (
                                    <span className="absolute right-0 top-0 mr-2 mt-2 text-red-400 hover:text-red-600 cursor-pointer" onClick={() => removeRule(index, i)}>remove rule</span>
                                  )}
                                </div>
                              );
                            })}
                          </span>
                          <span
                            className={cx({
                              "self-end": condition.rules.length > 1
                            },"flex w-full md:w-1/12")}
                          >
                            <MinusCircle
                              className={cx({
                                "cursor-pointer hover:text-gray-800": conditions.length !== 1
                              },
                              "mr-2 text-gray-400")
                              }
                              onClick={() => removeCondition(index)}
                            />

                            {(conditions.length == 1 || conditions.length - 1 == index) && (
                              <PlusCircle className="cursor-pointer hover:text-gray-800" onClick={addCondition}/>
                            ) }

                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="">
                    the revenue is  <span className="relative ml-2">
                      <input type="number" className="input w-52 pr-10"/>
                      <Percent width={20} className="absolute right-0 top-0 mr-2"/>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <button
                    className="btn btn-primary mr-3"
                    type="button"
                    onClick={props.onClose}
                  >
                    Confirm
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={props.onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={props.onClose}/>
          </div>
        </>
      ) : null}
    </>
  );
};

Modal.defaultProps = {
  show: false,
}

export default Modal;
