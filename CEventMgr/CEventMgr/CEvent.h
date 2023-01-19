#pragma once
class CEvent
{
public:
	CEvent();
	~CEvent();

	float m_ExecTime;
	
	virtual void doExec() = 0;

	virtual void doPrint() = 0;
};


